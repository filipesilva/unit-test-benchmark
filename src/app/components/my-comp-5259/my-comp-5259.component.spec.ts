import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5259Component } from './my-comp-5259.component';

describe('MyComp5259Component', () => {
  let component: MyComp5259Component;
  let fixture: ComponentFixture<MyComp5259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
