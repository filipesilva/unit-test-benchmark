import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5266Component } from './my-comp-5266.component';

describe('MyComp5266Component', () => {
  let component: MyComp5266Component;
  let fixture: ComponentFixture<MyComp5266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
