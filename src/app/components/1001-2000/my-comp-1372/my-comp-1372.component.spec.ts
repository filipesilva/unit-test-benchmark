import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1372Component } from './my-comp-1372.component';

describe('MyComp1372Component', () => {
  let component: MyComp1372Component;
  let fixture: ComponentFixture<MyComp1372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
