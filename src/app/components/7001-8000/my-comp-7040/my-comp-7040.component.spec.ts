import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7040Component } from './my-comp-7040.component';

describe('MyComp7040Component', () => {
  let component: MyComp7040Component;
  let fixture: ComponentFixture<MyComp7040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
