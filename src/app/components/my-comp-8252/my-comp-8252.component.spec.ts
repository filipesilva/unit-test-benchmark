import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8252Component } from './my-comp-8252.component';

describe('MyComp8252Component', () => {
  let component: MyComp8252Component;
  let fixture: ComponentFixture<MyComp8252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
