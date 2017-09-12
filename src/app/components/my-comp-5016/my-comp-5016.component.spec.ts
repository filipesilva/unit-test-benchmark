import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5016Component } from './my-comp-5016.component';

describe('MyComp5016Component', () => {
  let component: MyComp5016Component;
  let fixture: ComponentFixture<MyComp5016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
