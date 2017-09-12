import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5845Component } from './my-comp-5845.component';

describe('MyComp5845Component', () => {
  let component: MyComp5845Component;
  let fixture: ComponentFixture<MyComp5845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
