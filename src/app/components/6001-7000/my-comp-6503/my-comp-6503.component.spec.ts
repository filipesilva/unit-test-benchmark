import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6503Component } from './my-comp-6503.component';

describe('MyComp6503Component', () => {
  let component: MyComp6503Component;
  let fixture: ComponentFixture<MyComp6503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
