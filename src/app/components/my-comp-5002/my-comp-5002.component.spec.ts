import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5002Component } from './my-comp-5002.component';

describe('MyComp5002Component', () => {
  let component: MyComp5002Component;
  let fixture: ComponentFixture<MyComp5002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
