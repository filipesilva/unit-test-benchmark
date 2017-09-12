import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3105Component } from './my-comp-3105.component';

describe('MyComp3105Component', () => {
  let component: MyComp3105Component;
  let fixture: ComponentFixture<MyComp3105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
