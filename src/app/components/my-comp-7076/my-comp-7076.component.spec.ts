import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7076Component } from './my-comp-7076.component';

describe('MyComp7076Component', () => {
  let component: MyComp7076Component;
  let fixture: ComponentFixture<MyComp7076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
