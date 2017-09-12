import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3111Component } from './my-comp-3111.component';

describe('MyComp3111Component', () => {
  let component: MyComp3111Component;
  let fixture: ComponentFixture<MyComp3111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
