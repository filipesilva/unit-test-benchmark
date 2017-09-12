import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5816Component } from './my-comp-5816.component';

describe('MyComp5816Component', () => {
  let component: MyComp5816Component;
  let fixture: ComponentFixture<MyComp5816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
