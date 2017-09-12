import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp896Component } from './my-comp-896.component';

describe('MyComp896Component', () => {
  let component: MyComp896Component;
  let fixture: ComponentFixture<MyComp896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
