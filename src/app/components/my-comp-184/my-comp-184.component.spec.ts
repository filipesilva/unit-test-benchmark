import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp184Component } from './my-comp-184.component';

describe('MyComp184Component', () => {
  let component: MyComp184Component;
  let fixture: ComponentFixture<MyComp184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
