import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8898Component } from './my-comp-8898.component';

describe('MyComp8898Component', () => {
  let component: MyComp8898Component;
  let fixture: ComponentFixture<MyComp8898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
