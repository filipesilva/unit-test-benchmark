import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8010Component } from './my-comp-8010.component';

describe('MyComp8010Component', () => {
  let component: MyComp8010Component;
  let fixture: ComponentFixture<MyComp8010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
