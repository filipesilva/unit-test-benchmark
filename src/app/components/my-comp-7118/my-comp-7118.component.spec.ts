import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7118Component } from './my-comp-7118.component';

describe('MyComp7118Component', () => {
  let component: MyComp7118Component;
  let fixture: ComponentFixture<MyComp7118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
