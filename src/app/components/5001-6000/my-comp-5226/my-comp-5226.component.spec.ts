import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5226Component } from './my-comp-5226.component';

describe('MyComp5226Component', () => {
  let component: MyComp5226Component;
  let fixture: ComponentFixture<MyComp5226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
