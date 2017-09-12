import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8773Component } from './my-comp-8773.component';

describe('MyComp8773Component', () => {
  let component: MyComp8773Component;
  let fixture: ComponentFixture<MyComp8773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
