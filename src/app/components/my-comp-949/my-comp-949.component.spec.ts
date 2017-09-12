import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp949Component } from './my-comp-949.component';

describe('MyComp949Component', () => {
  let component: MyComp949Component;
  let fixture: ComponentFixture<MyComp949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
