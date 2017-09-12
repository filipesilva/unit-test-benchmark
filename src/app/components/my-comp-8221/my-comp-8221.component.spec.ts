import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8221Component } from './my-comp-8221.component';

describe('MyComp8221Component', () => {
  let component: MyComp8221Component;
  let fixture: ComponentFixture<MyComp8221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
