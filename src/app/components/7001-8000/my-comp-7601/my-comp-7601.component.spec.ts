import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7601Component } from './my-comp-7601.component';

describe('MyComp7601Component', () => {
  let component: MyComp7601Component;
  let fixture: ComponentFixture<MyComp7601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
