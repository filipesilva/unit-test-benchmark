import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6809Component } from './my-comp-6809.component';

describe('MyComp6809Component', () => {
  let component: MyComp6809Component;
  let fixture: ComponentFixture<MyComp6809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
