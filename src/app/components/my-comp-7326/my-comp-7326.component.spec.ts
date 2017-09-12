import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7326Component } from './my-comp-7326.component';

describe('MyComp7326Component', () => {
  let component: MyComp7326Component;
  let fixture: ComponentFixture<MyComp7326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
