import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5153Component } from './my-comp-5153.component';

describe('MyComp5153Component', () => {
  let component: MyComp5153Component;
  let fixture: ComponentFixture<MyComp5153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
