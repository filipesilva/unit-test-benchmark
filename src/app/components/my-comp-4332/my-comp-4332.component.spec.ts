import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4332Component } from './my-comp-4332.component';

describe('MyComp4332Component', () => {
  let component: MyComp4332Component;
  let fixture: ComponentFixture<MyComp4332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
