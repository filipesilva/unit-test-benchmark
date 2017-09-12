import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5721Component } from './my-comp-5721.component';

describe('MyComp5721Component', () => {
  let component: MyComp5721Component;
  let fixture: ComponentFixture<MyComp5721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
