import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2195Component } from './my-comp-2195.component';

describe('MyComp2195Component', () => {
  let component: MyComp2195Component;
  let fixture: ComponentFixture<MyComp2195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
