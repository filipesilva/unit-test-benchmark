import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5172Component } from './my-comp-5172.component';

describe('MyComp5172Component', () => {
  let component: MyComp5172Component;
  let fixture: ComponentFixture<MyComp5172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
