import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7402Component } from './my-comp-7402.component';

describe('MyComp7402Component', () => {
  let component: MyComp7402Component;
  let fixture: ComponentFixture<MyComp7402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
