import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4703Component } from './my-comp-4703.component';

describe('MyComp4703Component', () => {
  let component: MyComp4703Component;
  let fixture: ComponentFixture<MyComp4703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
