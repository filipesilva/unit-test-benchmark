import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7491Component } from './my-comp-7491.component';

describe('MyComp7491Component', () => {
  let component: MyComp7491Component;
  let fixture: ComponentFixture<MyComp7491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
