import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8090Component } from './my-comp-8090.component';

describe('MyComp8090Component', () => {
  let component: MyComp8090Component;
  let fixture: ComponentFixture<MyComp8090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
