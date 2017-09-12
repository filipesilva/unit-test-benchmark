import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7285Component } from './my-comp-7285.component';

describe('MyComp7285Component', () => {
  let component: MyComp7285Component;
  let fixture: ComponentFixture<MyComp7285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
