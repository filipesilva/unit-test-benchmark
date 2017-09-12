import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8162Component } from './my-comp-8162.component';

describe('MyComp8162Component', () => {
  let component: MyComp8162Component;
  let fixture: ComponentFixture<MyComp8162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
