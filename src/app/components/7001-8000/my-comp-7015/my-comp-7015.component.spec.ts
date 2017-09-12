import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7015Component } from './my-comp-7015.component';

describe('MyComp7015Component', () => {
  let component: MyComp7015Component;
  let fixture: ComponentFixture<MyComp7015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
