import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1044Component } from './my-comp-1044.component';

describe('MyComp1044Component', () => {
  let component: MyComp1044Component;
  let fixture: ComponentFixture<MyComp1044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
