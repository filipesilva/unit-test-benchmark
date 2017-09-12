import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7546Component } from './my-comp-7546.component';

describe('MyComp7546Component', () => {
  let component: MyComp7546Component;
  let fixture: ComponentFixture<MyComp7546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
