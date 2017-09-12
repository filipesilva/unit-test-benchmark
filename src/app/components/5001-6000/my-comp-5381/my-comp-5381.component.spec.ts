import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5381Component } from './my-comp-5381.component';

describe('MyComp5381Component', () => {
  let component: MyComp5381Component;
  let fixture: ComponentFixture<MyComp5381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
