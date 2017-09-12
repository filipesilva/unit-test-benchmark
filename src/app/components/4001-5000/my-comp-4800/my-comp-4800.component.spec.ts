import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4800Component } from './my-comp-4800.component';

describe('MyComp4800Component', () => {
  let component: MyComp4800Component;
  let fixture: ComponentFixture<MyComp4800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
