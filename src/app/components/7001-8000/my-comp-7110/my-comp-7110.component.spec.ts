import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7110Component } from './my-comp-7110.component';

describe('MyComp7110Component', () => {
  let component: MyComp7110Component;
  let fixture: ComponentFixture<MyComp7110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
