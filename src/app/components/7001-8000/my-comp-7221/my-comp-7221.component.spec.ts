import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7221Component } from './my-comp-7221.component';

describe('MyComp7221Component', () => {
  let component: MyComp7221Component;
  let fixture: ComponentFixture<MyComp7221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
