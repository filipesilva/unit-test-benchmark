import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3514Component } from './my-comp-3514.component';

describe('MyComp3514Component', () => {
  let component: MyComp3514Component;
  let fixture: ComponentFixture<MyComp3514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
