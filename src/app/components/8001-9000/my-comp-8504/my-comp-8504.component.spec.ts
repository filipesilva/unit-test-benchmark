import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8504Component } from './my-comp-8504.component';

describe('MyComp8504Component', () => {
  let component: MyComp8504Component;
  let fixture: ComponentFixture<MyComp8504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
