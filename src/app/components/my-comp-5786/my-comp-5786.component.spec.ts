import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5786Component } from './my-comp-5786.component';

describe('MyComp5786Component', () => {
  let component: MyComp5786Component;
  let fixture: ComponentFixture<MyComp5786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
