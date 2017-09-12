import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6316Component } from './my-comp-6316.component';

describe('MyComp6316Component', () => {
  let component: MyComp6316Component;
  let fixture: ComponentFixture<MyComp6316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
