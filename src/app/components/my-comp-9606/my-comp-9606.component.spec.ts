import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9606Component } from './my-comp-9606.component';

describe('MyComp9606Component', () => {
  let component: MyComp9606Component;
  let fixture: ComponentFixture<MyComp9606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
