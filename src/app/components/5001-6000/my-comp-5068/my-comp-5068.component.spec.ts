import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5068Component } from './my-comp-5068.component';

describe('MyComp5068Component', () => {
  let component: MyComp5068Component;
  let fixture: ComponentFixture<MyComp5068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
