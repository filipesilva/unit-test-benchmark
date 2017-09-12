import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6972Component } from './my-comp-6972.component';

describe('MyComp6972Component', () => {
  let component: MyComp6972Component;
  let fixture: ComponentFixture<MyComp6972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
