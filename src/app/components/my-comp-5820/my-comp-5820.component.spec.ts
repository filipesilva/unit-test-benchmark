import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5820Component } from './my-comp-5820.component';

describe('MyComp5820Component', () => {
  let component: MyComp5820Component;
  let fixture: ComponentFixture<MyComp5820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
