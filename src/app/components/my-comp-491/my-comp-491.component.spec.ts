import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp491Component } from './my-comp-491.component';

describe('MyComp491Component', () => {
  let component: MyComp491Component;
  let fixture: ComponentFixture<MyComp491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
