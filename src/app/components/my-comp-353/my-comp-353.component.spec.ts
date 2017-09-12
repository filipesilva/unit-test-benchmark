import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp353Component } from './my-comp-353.component';

describe('MyComp353Component', () => {
  let component: MyComp353Component;
  let fixture: ComponentFixture<MyComp353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
