import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8940Component } from './my-comp-8940.component';

describe('MyComp8940Component', () => {
  let component: MyComp8940Component;
  let fixture: ComponentFixture<MyComp8940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
